import { Express } from 'express';
import { PrismaClient } from "@prisma/client";
import {
  convertHourStringToMinutes,
  convertMinutesStringToHours,
} from "./utils/convertHour";
import AppError from "./errors/AppError";

const prisma = new PrismaClient();

interface IAd {
  id: string;
  gameId?: string;
  name: string;
  yearsPlaying: number;
  weekDays: string;
  hourStart: number;
  hourEnd: number;
  discord?: string;
  useVoiceChannel?: boolean;
}

const parsedAds = (ads: IAd[]) =>
  ads.map((ad) => ({
    ...ad,
    weekDays: ad.weekDays.split(",").map(Number),
    hourStart: convertMinutesStringToHours(ad.hourStart),
    hourEnd: convertMinutesStringToHours(ad.hourEnd),
  }));

export default (app: Express): void => {
  app.get("/games", async (request, response) => {
    const games = await prisma.game.findMany({
      include: {
        _count: {
          select: {
            ads: true,
          },
        },
      },
    });
  
    return response.json(games);
  });
  
  app.get("/games/:id/ads", async (request, response) => {
    const { id: gameId } = request.params;
  
    const ads = await prisma.ad.findMany({
      where: {
        gameId,
      },
      select: {
        id: true,
        name: true,
        yearsPlaying: true,
        weekDays: true,
        hourStart: true,
        hourEnd: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  
    return response.json(parsedAds(ads));
  });
  
  app.get("/ads/:id/discord", async (request, response) => {
    const { id } = request.params;
  
    const ad = await prisma.ad.findUniqueOrThrow({
      where: {
        id,
      },
      select: {
        discord: true,
        useVoiceChannel: true,
      },
    });
  
    return response.json(ad);
  });
  
  app.get("/ads", async (request, response) => {
    const ads = await prisma.ad.findMany({
      select: {
        id: true,
        gameId: true,
        name: true,
        yearsPlaying: true,
        weekDays: true,
        hourStart: true,
        hourEnd: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  
    return response.json(parsedAds(ads));
  });
  
  app.post("/games/:gameId/ads", async (request, response) => {
    const { gameId } = request.params;
    const {
      name,
      yearsPlaying,
      discord,
      useVoiceChannel,
      weekDays,
      hourStart,
      hourEnd,
    } = request.body;
  
    if (!name) throw new AppError('Informe o nome.', 400)
    if (!yearsPlaying) throw new AppError('Informe o tempo de jogo.', 400)
    if (!discord) throw new AppError('Informe o nick do discord.', 400)
    if (!useVoiceChannel) throw new AppError('Informe se utiliza VoiceChannel.', 400)
    if (!weekDays) throw new AppError('Informe os dias de jogo.', 400)
    if (!hourStart) throw new AppError('Informe a partir de que horas você joga.', 400)
    if (!hourEnd) throw new AppError('Informe quando você para de jogar.', 400)
  
    const ad = await prisma.ad.create({
      data: {
        gameId,
        name,
        yearsPlaying,
        discord,
        useVoiceChannel,
        weekDays: weekDays.join(","),
        hourStart: convertHourStringToMinutes(hourStart),
        hourEnd: convertHourStringToMinutes(hourEnd),
      },
    });
  
    return response
      .status(201)
      .json({
        ...ad,
        weekDays: ad.weekDays.split(",").map(Number),
        hourStart: convertMinutesStringToHours(ad.hourStart),
        hourEnd: convertMinutesStringToHours(ad.hourEnd),
      });
  });

  app.use((req, res) => {
    res.status(404).json({
      message: 'Rota não encontrada',
    });
  });
}

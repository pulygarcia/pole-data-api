import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class NewsService {
  async getNews() {
    const apiKey = process.env.NEWS_API_KEY;
    try {
        const response = await fetch(`${process.env.NEWS_API_BASE_URL}/everything?q=formula+one&language=es&sortBy=publishedAt&apiKey=${apiKey}`);
        const news = await response.json();

        return news.articles;
    } catch (e) {
        const error = new Error('Las noticias no están disponibles en este momento, lo sentimos.')
        throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
import { Request, Response } from 'express';
import { Studio } from '../models/studio.js';

export const  getStudios = (req: Request, res: Response) => {
    console.log('check');
    // サンプルデータ
    const studios: Studio[] = [
        {
            id: 1,
            name: 'studioA',
            availability: true,
        },
        {
            id: 2,
            name: 'studioB',
            availability: false,
        },
    ];

    res.json(studios);
}

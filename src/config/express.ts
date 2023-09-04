import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const configExpress = (app: Application) => {
    app.use(cors({ credentials:true }));
    app.use(morgan('dev'));
    app.use(express.json());
}

export default configExpress;
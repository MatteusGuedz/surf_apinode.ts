
import './util/module-alias';
import {Server} from '@overnightjs/core';
import bodyParser from 'body-parser';
import {ForecastController} from './controllers/forecast';
import { Application } from 'express';


// inicia uma class/constructor Setupserver e alguem chama o metodo init para iniciar..
export class SetupServer extends Server {
    constructor(private port = 3000){
        super();
    }

    public init(): void{
        this.setupExpress(); //que por sua vez  chama o metodo interno/privado setupexpress
        this.setupControllers(); // ||
    }


    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void {
        const forecastController = new  ForecastController();
        this.addControllers([forecastController]);
    }

    public getApp(): Application {
        return this.app;
    }
} 
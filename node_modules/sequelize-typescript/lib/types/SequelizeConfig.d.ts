import { ISequelizeConfig } from "../interfaces/ISequelizeConfig";
import { ISequelizeUriConfig } from "../interfaces/ISequelizeUriConfig";
import { ISequelizeDbNameConfig } from "../interfaces/ISequelizeDbNameConfig";
export declare type SequelizeConfig = ISequelizeConfig | ISequelizeUriConfig | ISequelizeDbNameConfig;
export declare type ModelMatch = (filename: string, member: string) => boolean;

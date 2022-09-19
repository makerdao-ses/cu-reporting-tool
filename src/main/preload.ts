import { contextBridge } from 'electron';
import { electronHostApi } from './electronHostApi';

contextBridge.exposeInMainWorld('electronHostApi', electronHostApi());
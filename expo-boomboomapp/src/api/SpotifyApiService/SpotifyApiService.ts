import { inject, singleton } from "tsyringe";

import { SpotifyApiServiceI, Track } from "./SpotifyApiServiceI";
import ConfigurationService from "../../services/ConfigurationService/ConfigurationService";
import ErrorService from "../../services/ErrorService/ErrorService";
import StorageService from "../../services/StorageService/StorageService";
import ServiceInterface from "../../tsyringe/ServiceInterface";
import { ApiService } from "../ApiService";

@singleton()
export class SpotifyApiService
  extends ApiService
  implements SpotifyApiServiceI
{
  constructor(
    @inject(ServiceInterface.StorageServiceI)
    protected storageService: StorageService,
    @inject(ServiceInterface.ConfigurationService)
    protected configurationService: ConfigurationService,
    @inject(ServiceInterface.ErrorService)
    protected errorService: ErrorService,
  ) {
    super("spotify", storageService, configurationService, errorService);
  }

  async fetchTop5Tracks() {
    const res = await this.apiRequester.get<Track[]>("/tracks");
    return res.data;
  }

  async fetchTracksNyName(name?: string) {
    const res = await this.apiRequester.get<Track[]>("/track-by-name", {
      params: {
        name,
      },
    });
    return res.data;
  }
}

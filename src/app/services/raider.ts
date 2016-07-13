import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

export type Mood = 'realistic' | 'utopic';
export enum AdverbParam {Off, On};

const host = 'http://localhost:4001';

export type Options = {
	char: string,
	mood: Mood,
	adverb: AdverbParam
};

@Injectable()
export class Raider {
	private apiUrl: string = host + '/api';
	private  versionUrl: string = host + '/version';

  constructor(private http: Http) {
	}

  getSprintName(params: Options) {
    let search = new URLSearchParams();

		if (params) {
			Object.keys(params).forEach(k =>search.set(k, params[k]));
		}

    return this.http.get(this.apiUrl, {search})
      .map((res) => res.json().name);
  }

	getVersion() {
		return this.http.get(this.versionUrl)
			.map((res) => res.json().version);
	}
}

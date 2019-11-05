export class CryptoApi {
  Name: string;
  Symbol: string;

  constructor() {}
}

export interface CryptoTickerApi {
  source: string;
  coin_id: string;
  success: boolean;
  currency: string;
  utc_date: string;
  coin_name: string;
  last_price: string;
  time_stamp: string;
  volume_24hr: string;
  currency_name: string;
  vol_24hr_pcnt: string;
  price_24hr_pcnt: string;
}

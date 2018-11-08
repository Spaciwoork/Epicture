
export class DataClient {
  public access_token;
  public expires_in;
  public token_type;
  public refresh_token;
  public account_username;
  public account_id;
  public all_favorites: Array<{}>;
  constructor(){
    this.all_favorites = []
  }
}

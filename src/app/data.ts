
export class Settings {
  name: string;
  streetnumber: string;
  postalcity: string;
}

export class NitrogenQuery {
  growth: string;
  earning: string;
  permanentGrassing: string;
}

export class VineyardLocation {
  name: string;
  description: string;
  area: string;
  variety: string;
  ground: number;
  humus: number;
  histroy: NitrogenQuery[];
}

export class Ground {
  name: string;
  humus: Humus[]
}

export class Humus {
  description: string;
  addsNitrogen: number;
}

export class Data {
  settings: Settings;
  locations: VineyardLocation[];
}

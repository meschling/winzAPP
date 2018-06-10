export class Settings {
  name: string;
  streetnumber: string;
  postalcity: string;
}

export class NitrogenQuery {
  date: Date;
  addsGrowth: number;
  addsEarning: number;
  addsNotLegum1: number;
  addsLegum1: number;
  addsOpenAttitude1: number;
  addsCover1: number;
  addsNotLegum2: number;
  addsLegum2: number;
  addsOpenAttitude2: number;
  addsCover2: number;
  dungCurrentYear:Dung[];
  dungYear2:Dung[];
  dungYear3:Dung[];
  dungYear4:Dung[];
}

export class VineyardLocation {
  name: string;
  description: string;
  area: number;
  variety: string;
  ground: number;
  addsHumus: number;
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
  messages: string[];
}

export class DungCategory {
  kompost: Dung[];
  festmist: Dung[];
  reststoffe: Dung[];
  sontiges: Dung[];
}

export class Dung {
  name: string;
  unit: string;
  factor: number;
  current: number;
  year2: number;
  year3: number;
  year4: number;
  applicationRate: number;
}

export const DUNG: DungCategory = {
  reststoffe: [
    {
      name: "Trester 40% TM",
      unit: "t",
      factor: 7.4,
      current: 10,
      year2: 10,
      year3: 0,
      year4: 0
    }, {
      name: "Trester 40% TM",
      unit: "m3",
      factor: 3.7,
      current: 10,
      year2: 10,
      year3: 0,
      year4: 0
    },
    {
      name: "Mosttrub flüssig",
      unit: "m3",
      factor: 5,
      current: 80,
      year2: 10,
      year3: 0,
      year4: 0
    },
    {
      name: "Weinhefe flüssig 20% TM",
      unit: "m3",
      factor: 8,
      current: 80,
      year2: 10,
      year3: 0,
      year4: 0
    },
    {
      name: "Weinhefe filtriert 40% TM",
      unit: "t",
      factor: 16,
      current: 80,
      year2: 10,
      year3: 0,
      year4: 0
    },
    {
      name: "Weinhefe filtriert 40% TM",
      unit: "m3",
      factor: 11,
      current: 80,
      year2: 10,
      year3: 0,
      year4: 0
    },
    {
      name: "Filtrationskieselgur 40% TM",
      unit: "t",
      factor: 6.4,
      current: 80,
      year2: 10,
      year3: 0,
      year4: 0
    }],
  sontiges: [
    {
      name: "Streuwiese 86% TM",
      unit: "t",
      factor: 11,
      current: 3,
      year2: 3,
      year3: 0,
      year4: 0
    },
    {
      name: "Stroh 90% TM",
      unit: "t",
      factor: 5,
      current: 2,
      year2: 0,
      year3: 0,
      year4: 0
    }],
  kompost: [
    {
      name: "Grünschnittkompost 64% TM",
      unit: "t",
      factor: 6.5,
      current: 3,
      year2: 4,
      year3: 3,
      year4: 3
    },
    {
      name: "Bioabfallkompost 52% TM",
      unit: "t",
      factor: 9,
      current: 5,
      year2: 4,
      year3: 3,
      year4: 3
    },
    {
      name: "Holzhäcksel",
      unit: "t",
      factor: 4,
      current: 0,
      year2: 0,
      year3: 0,
      year4: 0
    }],
  festmist: [
    {
      name: "Rindermist 25% TM",
      unit: "t",
      factor: 6.5,
      current: 25,
      year2: 10,
      year3: 0,
      year4: 0
    },
    {
      name: "Schweinemist 25% TM",
      unit: "t",
      factor: 9.8,
      current: 30,
      year2: 10,
      year3: 0,
      year4: 0
    },
    {
      name: "Schafsmist 25% TM",
      unit: "t",
      factor: 5.5,
      current: 25,
      year2: 10,
      year3: 0,
      year4: 0
    },
    {
      name: "Pferdemist 25% TM",
      unit: "t",
      factor: 5,
      current: 25,
      year2: 10,
      year3: 0,
      year4: 0
    },

    {
      name: "Hühnermist 50% TM",
      unit: "t",
      factor: 22,
      current: 30,
      year2: 10,
      year3: 0,
      year4: 0
    },
  ]
};

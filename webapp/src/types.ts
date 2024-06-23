export interface NeighborhoodProps {
  name: string;
}

export interface RawNeighborhoodProps {
  nhood: string;
}

interface IncidentCount {
  name: string;
  count: number;
}
export interface NeighborhoodDataResp {
  categoryCounts: IncidentCount[];
  countsByHour: number[];
  medianPerDay: number;
}

export interface IncidentFilterProps {
  categories: string[];
  timePeriod: string;
}

export const defaultIncidentFilters = (): IncidentFilterProps => ({
  categories: [],
  timePeriod: "1YEAR",
});

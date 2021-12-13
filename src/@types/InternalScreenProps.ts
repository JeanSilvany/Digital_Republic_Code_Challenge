interface DetailsAreaChildProps {
  totalArea: string;
}

export interface FinalAreaProps {
  finalWallAreaOne?: Number | any;
  finalWallAreaTwo?: Number | any;
  finalWallAreaThree?: Number | any;
  finalWallAreaFour?: Number | any;
}

export interface DoorsInfoProps {
  doorsAreaOne: DetailsAreaChildProps;
  doorsAreaTwo: DetailsAreaChildProps;
  doorsAreaThree: DetailsAreaChildProps;
  doorsAreaFour: DetailsAreaChildProps;
}

export interface WindowsInfoProps {
  windowsAreaOne: DetailsAreaChildProps;
  windowsAreaTwo: DetailsAreaChildProps;
  windowsAreaThree: DetailsAreaChildProps;
  windowsAreaFour: DetailsAreaChildProps;
}

export interface FinalProps {
  small: number;
  medium: number;
  big: number;
  large: number;
}

// User Infos Interfaces
export interface IUser {
  userInfos: IUserInfos
  todayScore: number
  sessionsActivity: IActivitySession[]
  sessionsAverage: IAverageSessions[]
  performances: IValues[]
  keyData: IKeyData
}

export interface IUserInfos {
  firstName: string
  lastName?: string
  age?: number
}

export interface IKeyData {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
}

export interface IActivityItem {
  icon: string
  value: number
  name: string
  unit: string
}

// Average Interfaces
export interface IAverageSessions {
  [key: string]: string | number
  day: number
  sessionLength: number
}
export interface IAverage {
  session: IAverageSessions[]
  sessions: IAverageSessions[]

}
// Perforrmance Interfaces
export interface IPerformance {
  performances: IValues[]
}

export interface IValues {
  [key: string]: string | number
  value: number
  kind: string | number
}
export interface IValue {
  [key: string]: string | number
  value: number
  kind: number
}

// Activity Interfaces
export interface IActivitySession {
  [key: string]: string | number
  day: string
  kilogram: number
  calories: number
}

export interface IActivitySessions {
  session: IActivitySession[]
}

// D3 ChartsBlock
export interface Props {
  data: IGroupedData[]
}

export interface BarProps {
  x: number
  y: number
  width: number
  height: number
  color: string
  // onMouseEnter: (e: MouseEvent<SVGPathElement>) => void
  // onMouseLeave: () => void
}

export interface Tooltip {
  x: number
  y: number
  index: number
}

export interface IData {
  label: string
  value: number
}

export interface IGroupedData {
  label: string
  values: number[]
}

export interface IBarChartAxis {
  type: string
  axis: any
  translate: number
  select: string
  className?: string
  remove?: boolean
}
// Create an interface for the size of the window
export interface Size {
  width: number
  height: number
}

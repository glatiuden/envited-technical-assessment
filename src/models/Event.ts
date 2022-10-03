export interface IEvent {
  eventName: string;
  eventHost: string;
  eventStartDate: string;
  eventEndDate: string;
  eventLocation: string;
  eventPhoto?: string;
}

export default class Event implements IEvent {
  public eventName: string;
  public eventHost: string;
  public eventStartDate: string;
  public eventEndDate: string;
  public eventLocation: string;
  public eventPhoto?: string;

  constructor(
    eventName: string,
    eventHost: string,
    eventStartDate: string,
    eventEndDate: string,
    eventLocation: string,
    eventPhoto: string
  ) {
    this.eventName = eventName;
    this.eventHost = eventHost;
    this.eventStartDate = eventStartDate;
    this.eventEndDate = eventEndDate;
    this.eventLocation = eventLocation;
    this.eventPhoto = eventPhoto;
  }
}

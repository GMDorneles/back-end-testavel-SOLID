export interface AppointmentProps {
  custumer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointiment {
  private props: AppointmentProps;

  get custumer() {
    return this.props.custumer;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }

  constructor(props: AppointmentProps) {
    this.props = props;
  }
}

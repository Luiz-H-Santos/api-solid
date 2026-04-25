export class LateCheckInValidationError extends Error {
  constructor() {
    super(
      'The check-in can only be validation until 20 minute of its creation.',
    )
  }
}

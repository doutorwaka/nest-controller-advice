export abstract class ExceptionHandler<T extends Error> {
  public abstract handle(exception: T): void;
}

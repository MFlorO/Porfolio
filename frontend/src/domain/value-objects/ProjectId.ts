export class ProjectId {
  private readonly value: string;

  constructor(value: string) {
    if (!value || value.trim() === "") {
      throw new Error("ProjectId no puede estar vacío");
    }
    this.value = value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: ProjectId): boolean {
    return this.value === other.value;
  }
}

import { ModelType } from "dynamoose/dist/General";
import { AnyItem } from "dynamoose/dist/Item";

export class Repository<T extends ModelType<AnyItem>> {
    constructor(private model: T) {}

    async create(data: T) {
        return this.model.create(data);
    }

    async get(data: Record<string, string | number>) {
        return this.model.get(data);
    }

    async delete(data: Record<string, string | number>) {
        return this.model.delete(data);
    }

    async update(data: Record<string, string | number>, newData: T) {
        return this.model.update(data, newData);
    }

    async scan() {
        return this.model.scan().exec();
    }
}

import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

interface Result {
  date: string;
  meals: MealStorageDTO[];
}

export function separateForEqualDate(itens: MealStorageDTO[]): Result[] {
  const itensSeparados: { [key: string]: MealStorageDTO[] } = {};

  for (const item of itens) {
    const data = item.date;
    if (data in itensSeparados) {
      itensSeparados[data].push(item);
    } else {
      itensSeparados[data] = [item];
    }
  }

  const resultado: Result[] = [];
  for (const data in itensSeparados) {
    resultado.push({ date: data, meals: itensSeparados[data] });
  }

  const formatDate = resultado.map(data => {
    return {
      ...data,
      date: data.date.replaceAll("/", ".")
    }
  })

  return formatDate;
}
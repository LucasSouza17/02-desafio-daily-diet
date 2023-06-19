import moment from "moment";
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
    const sortingItemSeparadoByHour = itensSeparados[data].sort((a, b) =>
      moment(a.hour, "hh:mm").diff(moment(b.hour, "HH:mm"))
    ).map(meal => {
      const formatHour = moment(meal.hour, 'HH:mm').format('HH:mm')
      return {
        ...meal,
        hour: formatHour
      }
    });

    resultado.push({ date: data, meals: sortingItemSeparadoByHour });
  }

  const sortingDate = resultado.sort((a, b) =>
    moment(b.date, "DD/MM/YYYY").diff(moment(a.date, "DD/MM/YYYY"))
  );

  const formatDate = sortingDate.map((data) => {
    const dateSplited = data.date.split("/");
    const yearFormat = dateSplited[2][0] + dateSplited[2][3];
    const dateFormat = `${dateSplited[0]}.${dateSplited[1]}.${yearFormat}`;

    return {
      ...data,
      date: dateFormat,
    };
  });

  return formatDate;
}

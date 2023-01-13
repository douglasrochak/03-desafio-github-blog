import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const dateFormatted = (date: Date) => {
  format(date, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
};

export const dateRelativeToNow = (date: Date) => {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
};

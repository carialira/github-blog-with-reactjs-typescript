import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export function formattedDate (created_at: string) {
 return formatDistanceToNow(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  });
}
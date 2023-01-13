import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";

const searchFormSchema = z.object({
  query: z.string().min(1),
});

type SearchFormType = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchPosts } = useContext(PostsContext);

  const { register, handleSubmit } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormType) {
    await fetchPosts(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input
        placeholder="Buscar conteúdo"
        type="text"
        required
        {...register("query")}
      />
    </SearchFormContainer>
  );
}

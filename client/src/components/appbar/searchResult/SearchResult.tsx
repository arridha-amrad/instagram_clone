import React from "react";
import {
  Name,
  ResultContainer,
  Username,
  UserWrapper,
  Avatar,
  AvatarWrapper,
} from "./SearchResult.elements";

interface SearchResultProps {}

const SearchResult: React.FC<SearchResultProps> = () => {
  return (
    <ResultContainer>
      <UserWrapper>
        <AvatarWrapper>
          <Avatar src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
        </AvatarWrapper>
        <div>
          <Username to="/">upiak_isil</Username>
          <Name>Isil Halilintar</Name>
        </div>
      </UserWrapper>
    </ResultContainer>
  );
};

export default SearchResult;

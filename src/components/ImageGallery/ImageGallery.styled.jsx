import styled from 'styled-components';

export const ImageGalleryUl = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 22px;
  margin: 0px auto;
  padding: 90px 0px 20px;
  list-style: none;
  box-sizing: inherit;
`;

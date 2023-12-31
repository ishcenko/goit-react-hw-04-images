import styled from 'styled-components';

export const ImageGalleryLi = styled.li`
  border-radius: 22px;
  height: 260px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ImageGalleryItemImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
    cursor: zoom-in;
  }
`;

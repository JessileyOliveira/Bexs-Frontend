import React from 'react';

import { Container } from './styles';
import NewQuestion from './NewQuestion';
import ItemQuestion from './ItemQuestion';

export default function Question() {
  // const [listQuestion, setListQuestion]
  return (
    <Container>
      <NewQuestion />
      <ItemQuestion
        object={{
          user: 'Jessiley Olioveira',
          text: 'Minha pergunta vem aqui?',
          created_at: '2020-05-02 13:12:05',
        }}
      />
      <ItemQuestion
        object={{
          user: 'Jessiley Olioveira',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem risus, venenatis non facilisis a, porttitor quis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum dictum lorem, nec lobortis odio malesuada eu. Aenean hendrerit tempus nibh non aliquam. Sed at quam eu nisl egestas facilisis. Morbi et lectus at tellus feugiat convallis ut sit amet risus. Cras viverra nisl ac suscipit aliquam. Ut diam elit, tincidunt vel quam quis, consectetur facilisis sapien. Suspendisse semper tristique lobortis. Curabitur accumsan nec erat non ultricies.?',
          created_at: '2020-04-30 22:12:05',
        }}
      />
    </Container>
  );
}

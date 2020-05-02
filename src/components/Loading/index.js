import React from 'react';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </Container>
  );
}

import React from 'react';
import { Form, Col } from 'react-bootstrap';

export function Range() {
  return (
    <>
      <Form.Label for="volume">Range</Form.Label>
      <Form.Range id="volume" min="0" max="100" step="5" />
    </>
  );
}

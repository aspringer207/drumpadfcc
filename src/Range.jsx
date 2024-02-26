import React from 'react';
import { Form, Col } from 'react-bootstrap';

export function Range() {
  return (
    <>
      <Form.Label>Range
      <Form.Range id="volume" min="0" max="100" step="5" /></Form.Label>
    </>
  );
}

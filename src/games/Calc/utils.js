import { getRndInteger } from '../../utils.js';

function getRndOperatorByOperators(operators) {
  const idx = getRndInteger(operators.length);
  const operator = operators[idx];

  return operator;
}

function exprToStr(operands, operator) {
  const uniteStr = ` ${operator} `;

  return operands.join(uniteStr);
}

function calc(expr) {
  // eslint-disable-next-line no-new-func
  return new Function(`return ${expr}`)();
}

export {
  getRndOperatorByOperators,
  exprToStr,
  calc,
};

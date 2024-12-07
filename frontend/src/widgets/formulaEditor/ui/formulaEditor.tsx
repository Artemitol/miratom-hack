import React, { useState, useEffect } from "react";
import MathQuill, { addStyles, EditableMathField } from "react-mathquill";

addStyles();

export function FormulaEditor(props: { children?: React.ReactNode }) {
  const [latex, setLatex] = useState<string>("");

  useEffect(() => {
    // Any additional setup if needed when MathQuill is used
  }, []);

  const insertFormula = (newFormula: string) => {
    setLatex((prevLatex) => `${prevLatex} ${newFormula}`);
  };

  return (
    <div className="editor-container">
      <h2>Редактор формул</h2>

      <div>
        <button onClick={() => insertFormula("\\frac{}{}")}>Дробь</button>
        <button onClick={() => insertFormula("\\sqrt{}")}>Корень</button>
        <button onClick={() => insertFormula("\\int_{}^{}")}>Интеграл</button>
        <button onClick={() => insertFormula("\\sum_{}^{}")}>Сумма</button>
        <button onClick={() => insertFormula("\\pi")}>Пи</button>
      </div>

      <EditableMathField
        latex={latex}
        onChange={(mathField) => setLatex(mathField.latex())}
        className="math-field"
      />

      <div>
        <strong>LaTeX код:</strong> {latex}
      </div>
    </div>
  );
};

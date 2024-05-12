import React from "react";
import { Card, Tooltip, Badge, Collapse, Col, Row } from "antd";
import { gridStyle } from "./sytle";
import {
  SLOC,
  CYC,
  MAINTAINABILITY,
  EFFORT,
  OPERATORS,
  OPERANDS,
  LENGTH,
  DIFFICULTY,
  PARAMETERS,
  BUGS,
  CYCLOMATIC_DENSITY,
  TIME,
  // ANALYSIS_AGGREGATE
} from "./analysisResultMening";

const renderAnalysisResult = (result) => {
  return (
    <div className="p-5">
      <Card title="Analysis Aggregate" className="m-3 bg-blue-400">
        <Tooltip title={SLOC}>
          <Card.Grid style={gridStyle} className="bg-blue-200">
            Total Lines of Code (SLOC)
            <br /> {result.aggregate.sloc.logical || 0}
          </Card.Grid>
        </Tooltip>
        <Tooltip title={CYC}>
          <Card.Grid style={gridStyle} className="bg-blue-200">
            Total Cyclomatic Complexity
            <br /> {result.aggregate.cyclomatic || 0}
          </Card.Grid>
        </Tooltip>
        <Tooltip title={MAINTAINABILITY}>
          <Card.Grid style={gridStyle} className="bg-blue-200">
            Maintainability
            <br /> {result.maintainability.toFixed(2) || 0}
          </Card.Grid>
        </Tooltip>
        <Card.Grid style={gridStyle} className="bg-blue-200">
          <Tooltip title={EFFORT}>
            Effort
            <br /> {result.effort.toFixed(2) || 0}
          </Tooltip>
        </Card.Grid>
      </Card>

      <Card title="Halstead Complexity" className="m-3 bg-blue-400">
        <Tooltip title={OPERATORS}>
          <Card.Grid style={gridStyle} className="bg-blue-200">
            Operators
            <br /> {result.aggregate.halstead.operators.total || 0}
          </Card.Grid>
        </Tooltip>
        <Tooltip title={OPERANDS}>
          <Card.Grid style={gridStyle} className="bg-blue-200">
            Operands
            <br /> {result.aggregate.halstead.operands.total || 0}
          </Card.Grid>
        </Tooltip>
        <Tooltip title={LENGTH}>
          <Card.Grid style={gridStyle} className="bg-blue-200">
            Length
            <br /> {result.aggregate.halstead.length || 0}
          </Card.Grid>
        </Tooltip>
        <Tooltip title={DIFFICULTY}>
          <Card.Grid style={gridStyle} className="bg-blue-200">
            Difficulty
            <br /> {result.aggregate.halstead.difficulty.toFixed(2) || 0}
          </Card.Grid>
        </Tooltip>
        <Tooltip title={PARAMETERS}>
          <Card.Grid style={gridStyle} className="bg-blue-200">
            Parameters
            <br /> {result.aggregate.params || 0}
          </Card.Grid>
        </Tooltip>
        <Tooltip title={BUGS}>
          <Card.Grid style={gridStyle} className="bg-blue-200">
            Bugs
            <br /> {result.aggregate.halstead.bugs.toFixed(2) || 0}
          </Card.Grid>
        </Tooltip>
        <Tooltip title={CYCLOMATIC_DENSITY}>
          <Card.Grid style={gridStyle} className="bg-blue-200">
            Cyclomatic Density
            <br /> {result.aggregate.cyclomaticDensity.toFixed(2) || 0}
          </Card.Grid>
        </Tooltip>
        <Card.Grid style={gridStyle} className="bg-blue-200">
          <Tooltip title={TIME}>
            Time
            <br /> {result.aggregate.halstead.time.toFixed(2) || 0}
          </Tooltip>
        </Card.Grid>
      </Card>

      <div className="m-3">
        <Row>
          <Col span={6} style={{ marginRight: "40px" }}>
            <Badge.Ribbon text="Operators" color="cyan">
              <Card title="Identifiers" size="small" headStyle={{backgroundColor:"rgb(103 232 249)"}} style={{backgroundColor:"rgb(207 250 254)"}}>
                {result.aggregate.halstead.operators.identifiers.join(", ")}
              </Card>
            </Badge.Ribbon>
            <div style={{ marginTop: "40px" }}>
              <Badge.Ribbon text="Operands" color="green">
                <Card title="Identifiers" size="small" headStyle={{backgroundColor:"rgb(134 239 172)"}} style={{backgroundColor:"rgb(220 252 231)"}}>
                  {result.aggregate.halstead.operands.identifiers.join(", ")}
                </Card>
              </Badge.Ribbon>
            </div>
          </Col>
          <Col span={17}>
            {result.functions && <h2>Functions:</h2>}

            <Collapse size="middle">
              {result.functions.map((func, index) => (
                <Collapse.Panel header={`Function: ${func.name}`} key={index} className="bg-blue-400">
                  <p>Name: {func.name}</p>
                  <p>Cyclomatic Complexity: {func.cyclomatic}</p>
                  <p>Total Lines of Code (SLOC): {func.sloc.logical}</p>
                  <p>Total Cyclomatic Complexity: {func.cyclomatic}</p>
                  <p>Operators: {func.halstead.operators.total}</p>
                  <p>Operands: {func.halstead.operands.total}</p>
                  <p>Parameters: {func.params}</p>
                </Collapse.Panel>
              ))}
            </Collapse>
          </Col>
        </Row>
        <br />
        <br />
      </div>
    </div>
  );
};

export default renderAnalysisResult;

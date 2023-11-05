"use client";

import { Pie, measureTextWidth } from "@ant-design/plots";
import React from "react";

interface Item {
  type: string;
  value: number;
  color: string;
}

interface ChildComponentProps {
  items?: Item[];
}

const getColors = (items: any) => {
  return items?.map((item: Item) => {
    return item.color;
  });
};

const DemoPie: React.FC<ChildComponentProps> = (props) => {
  function renderStatistic(
    containerWidth: number,
    text: string,
    style: React.CSSProperties
  ): string {
    const { width: textWidth, height: textHeight } = measureTextWidth(
      text,
      style
    );
    const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

    let scale = 1;

    if (containerWidth < textWidth) {
      scale = Math.min(
        Math.sqrt(
          Math.abs(
            Math.pow(R, 2) /
              (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))
          )
        ),
        1
      );
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
      scale < 1 ? 1 : "inherit"
    };">${text}</div>`;
  }
  type PieDatum = /*unresolved*/ any;

  type PieConfig = /*unresolved*/ any;
  type PieView = /*unresolved*/ any;
  const config: PieConfig = {
    appendPadding: 10,
    data: props.items,
    angleField: "value",
    colorField: "type",
    radius: 1,
    color: getColors(props?.items),
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v: any) => `${v} ¥`,
      },
    },
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        textAlign: "center",
      },
      autoRotate: false,
      content: "{value}",
    },
    statistic: {
      title: {
        offsetY: -4,
        customHtml: (
          container: HTMLElement,
          view: PieView,
          datum: PieDatum
        ) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          const text = datum ? datum.type : "";
          return renderStatistic(d, text, {
            fontSize: 28,
          });
        },
      },
      content: {
        offsetY: 4,
        style: {
          fontSize: "32px",
        },
        customHtml: (
          container: HTMLElement,
          view: PieView,
          datum: PieDatum,
          data: PieDatum[]
        ) => {
          const { width } = container.getBoundingClientRect();
          const text = datum ? ` ${datum.value}` : ` `;
          return renderStatistic(width, text, {
            fontSize: 32,
          });
        },
      },
    },

    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
      {
        type: "pie-statistic-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default DemoPie;

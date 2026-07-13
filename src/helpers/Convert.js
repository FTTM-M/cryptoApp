const Convert = (chart, type) => {
  // console.log(type);
  // console.log(chart[type]);

  const convertData = chart[type].map((item) => {
    return {
      date: item[0],
      [type]: item[1],
    };
  });

  return convertData;
};

export default Convert;

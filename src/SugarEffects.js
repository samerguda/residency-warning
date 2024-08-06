import React from "react";

const SugarEffects = () => {
  const effects = [
    {
      title: "زيادة الوزن والسمنة",
      description:
        "السكر يحتوي على سعرات حرارية عالية بدون تقديم أي فوائد غذائية، مما يمكن أن يؤدي إلى زيادة الوزن.",
    },
    {
      title: "مشاكل الأسنان",
      description:
        "السكر يعتبر عاملًا رئيسيًا في تسوس الأسنان بسبب تكوين الأحماض التي تؤدي إلى تآكل المينا.",
    },
    {
      title: "مشاكل التمثيل الغذائي",
      description:
        "استهلاك كميات كبيرة من السكر يمكن أن يؤدي إلى مقاومة الأنسولين وارتفاع ضغط الدم.",
    },
    {
      title: "زيادة خطر الإصابة بأمراض القلب",
      description:
        "السكر الزائد يمكن أن يؤدي إلى تراكم الدهون في الكبد، مما يزيد من خطر الإصابة بأمراض الكبد.",
    },
    {
      title: "التأثيرات السلبية على البشرة",
      description:
        "يمكن للسكر أن يؤدي إلى تلف الكولاجين في البشرة، مما يزيد من ظهور التجاعيد وعلامات الشيخوخة.",
    },
    {
      title: "الاعتماد والإدمان",
      description:
        "السكر يمكن أن يكون له تأثيرات إدمانية على الدماغ، مشابهة لتلك الناتجة عن بعض المواد المخدرة.",
    },
    {
      title: "مشاكل صحية عقلية",
      description:
        "الاستهلاك المفرط للسكر يمكن أن يرتبط بزيادة حالات الاكتئاب والقلق.",
    },
    {
      title: "مشاكل في الجهاز الهضمي",
      description:
        "السكر يمكن أن يؤثر على توازن البكتيريا النافعة في الأمعاء، مما يؤدي إلى مشاكل في الهضم.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>أضرار السكر</h1>
      <ul style={styles.list}>
        {effects.map((effect, index) => (
          <li key={index} style={styles.listItem}>
            <h3 style={styles.effectTitle}>{effect.title}</h3>
            <p style={styles.effectDescription}>{effect.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "20px",
    padding: "15px",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  effectTitle: {
    margin: 0,
    color: "#d9534f",
  },
  effectDescription: {
    margin: "10px 0 0 0",
    color: "#555",
  },
};

export default SugarEffects;

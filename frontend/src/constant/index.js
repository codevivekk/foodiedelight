import { restruantForm } from "./ResturantForm";

export const features = [
    { 
        title : "Gourmet Farm-to-Table",
        description : "Enjoy fresh, seasonal dishes made from locally-sourced ingredients, highlighting natural flavors and promoting sustainable, healthy dining.",
    },
    { 
        title : "Elegant Ambiance Setting",
        description : "Dine in a sophisticated, tranquil environment with elegant decor and ambient lighting, perfect for intimate and special occasions.",
    },
    { 
        title : "Exceptional Customer Service",
        description : "Experience attentive, friendly, and professional service, ensuring personalized recommendations and accommodating dietary needs for an exceptional visit.",
    }
]

export const FQA = [
    {
      key: "1",
      label: "What is Foodie Delight and how does it work?",
      children: (
        <p>
          Foodie Delight is a gourmet dining experience offering farm-to-table cuisine in an elegant ambiance. Guests can make reservations online, choose their desired seating time, and enjoy fresh, seasonal dishes crafted by our expert chefs.
        </p>
      ),
    },
    {
      key: "2",
      label: "How do I use search filters?",
      children: (
        <p>
          Use our online reservation system to filter available times by date, meal type (breakfast, lunch, dinner), and special requests (e.g., vegetarian, gluten-free). This helps you find the perfect dining experience to suit your needs.
        </p>
      ),
    },
    {
      key: "3",
      label: "Do I need to meet my Host?",
      children: (
        <p>
          While you won't meet a specific host, our friendly and professional staff will be available to welcome you, answer any questions, and ensure your dining experience is exceptional from start to finish.
        </p>
      ),
    },
    {
      key: "4",
      label: "What if I need to cancel due to a problem with the reservation or restaurant?",
      children: (
        <p>
          If you encounter any issues with your reservation or experience at the restaurant, please contact us immediately. We offer flexible cancellation policies and will work to resolve any problems, including rescheduling or providing a refund if necessary.
        </p>
      ),
    },
    {
      key: "5",
      label: "Need more information?",
      children: (
        <p>
          For more details about our menu, special events, or any other inquiries, please visit our website or contact our customer service team. We're here to help ensure you have a memorable dining experience at Foodie Delight.
        </p>
      ),
    },
  ];


  export let restruantFormObj = {}

  Object?.keys(restruantForm)?.map((ele) => {
    restruantFormObj[ele] =  null
  })


  
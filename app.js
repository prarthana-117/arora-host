document.querySelectorAll(".buy").forEach((button) => {
  button.addEventListener("click", () => {
    const plan = button.dataset.plan || "Starter";
    const price = button.dataset.price || "199";

    const query = new URLSearchParams({
      plan: plan,
      price: price
    });

    window.location.href = "order.html?" + query.toString();
  });
});
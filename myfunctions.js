function submitApp() {
  const name = document.getElementById("appName").value.trim();
  const company = document.getElementById("company").value.trim();
  const website = document.getElementById("website").value.trim();
  const isFree = document.getElementById("isFree").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value.trim();

  const nameRegex = /^[A-Za-z]+$/;
  const companyRegex = /^[A-Za-z0-9]+$/;
  const urlRegex = /^(https?:\/\/)?(www\.)?[\w\-]+\.[a-z]{2,6}(\/[\w\-]*)*\/?$/;

  if (!nameRegex.test(name)) {
    alert("اسم التطبيق يجب أن يكون أحرف إنكليزية فقط بدون فراغات");
    return;
  }

  if (!companyRegex.test(company)) {
    alert("اسم الشركة يجب أن تكون أحرف إنكليزية ويمكن أن تحتوي أرقام");
    return;
  }

  if (!urlRegex.test(website)) {
    alert("أدخل رابط موقع صحيح");
    return;
  }

  if (description === "") {
    alert("أدخل شرح مختصر");
    return;
  }

  const appData = {
    name,
    company,
    website,
    isFree,
    category,
    description
  };

  let apps = JSON.parse(localStorage.getItem("apps")) || [];
  apps.push(appData);
  localStorage.setItem("apps", JSON.stringify(apps));

  window.location.href = "apps.html";
}

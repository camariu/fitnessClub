import { useState } from "react";
import Lottie from "lottie-react";
import woman from "../../assets/lottie/woman.json";
import man from "../../assets/lottie/man.json";
import confetti from "../../assets/lottie/confetti.json";

export default function FormPlan() {
  const [formData, setFormData] = useState({
    email: "",
    varsta: "",
    sex: "",
    inaltime_cm: "",
    greutate_kg: "",
    tip_somatic: "",
    zile_antrenament_saptamana: "",
    frecventa_antrenament_zi: "",
    experienta_antrenamente: "",
    probleme_sanatate: "",
    obiective: [],
    timp_rezultate: [],
    abilitati: [],
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.email ||
      !formData.varsta ||
      !formData.sex ||
      !formData.inaltime_cm ||
      !formData.greutate_kg ||
      !formData.tip_somatic ||
      !formData.zile_antrenament_saptamana ||
      !formData.frecventa_antrenament_zi ||
      !formData.experienta_antrenamente ||
      !formData.probleme_sanatate ||
      !formData.obiective ||
      !formData.timp_rezultate ||
      !formData.abilitati
    ) {
      alert("Va rog completati toate campurile");
      return;
    }
    try {
      const response = await fetch("http://localhost:9000/userform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userform: [formData] }),
      });
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert("Ceva nu a mers bine 😔. Vă rugăm încercați din nou mai târziu.");
      }
      setFormData({
        email: "",
        varsta: "",
        sex: "",
        inaltime_cm: "",
        greutate_kg: "",
        tip_somatic: "",
        zile_antrenament_saptamana: "",
        frecventa_antrenament_zi: "",
        experienta_antrenamente: "",
        probleme_sanatate: "",
        obiective: [],
        timp_rezultate: [],
        abilitati: [],
      });
    } catch (error) {
      console.error("Eroare:", error);
      alert("Ceva nu a mers bine 😔. Vă rugăm încercați din nou mai târziu.");
    }
  };

  if (formSubmitted) {
    return (
      <div className="px-9">
        <div className="flex min-h-screen overflow-y-auto pt-[50px]">
          <div className="mx-auto max-w-lg">
            <p className=" text-center  font-poetsen text-[25px] font-bold text-green-700">
              Formularul a fost trimis cu succes! ✔
            </p>
            <p className="pt-4 text-center font-poetsen text-[15px] font-bold text-stone-100">
              În cel mai scurt timp vei fi contactat 😎
            </p>
            <Lottie animationData={confetti}></Lottie>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center px-9 pt-6">
      <div>
        <Lottie
          animationData={man}
          className=" hidden sm:block sm:h-[200px]"
        ></Lottie>
      </div>
      <div className="flex min-h-screen overflow-y-auto pt-9 ">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-h-[400px] max-w-lg overflow-y-auto rounded-lg  bg-gray-100 bg-opacity-85 p-6 font-poetsen tracking-wide shadow-md  scrollbar-none"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold  text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-semibold text-gray-700"
            >
              Vârstă:
            </label>
            <input
              type="number"
              id="varsta"
              name="varsta"
              value={formData.varsta}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="sex"
              className="block text-sm font-semibold text-gray-700"
            >
              Sex:
            </label>
            <select
              id="sex"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option value="" disabled selected>
                Alege sexul
              </option>
              <option value="male">Masculin</option>
              <option value="female">Feminin</option>
              <option value="other">Altul</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="inaltime_cm"
              className="block text-sm font-semibold text-gray-700"
            >
              Înălțime (cm):
            </label>
            <input
              type="number"
              id="inaltime_cm"
              name="inaltime_cm"
              value={formData.inaltime_cm}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="greutate_kg"
              className="block text-sm font-semibold text-gray-700"
            >
              Greutate curentă (kg):
            </label>
            <input
              type="number"
              id="greutate_kg"
              name="greutate_kg"
              value={formData.greutate_kg}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="tip_somatic"
              className="block text-sm font-semibold text-gray-700"
            >
              Tip somatic:
            </label>
            <input
              type="text"
              id="tip_somatic"
              name="tip_somatic"
              value={formData.tip_somatic}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="zile_antrenament_saptamana"
              className="block text-sm font-semibold text-gray-700"
            >
              Câte zile pe săptămână plănuiești să te antrenezi?
            </label>
            <input
              type="number"
              id="zile_antrenament_saptamana "
              name="zile_antrenament_saptamana"
              value={formData.zile_antrenament_saptamana}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="frecventa_antrenament_zi"
              className="block text-sm font-semibold text-gray-700"
            >
              De câte ori pe zi îți propui să mergi la antrenament?
            </label>
            <input
              type="number"
              id="frecventa_antrenament_zi"
              name="frecventa_antrenament_zi"
              value={formData.frecventa_antrenament_zi}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="experienta_antrenamente"
              className="block text-sm font-semibold text-gray-700"
            >
              Ai vreo experiență anterioară cu antrenamentele sau cu
              frecventarea unei săli de fitness?
            </label>
            <input
              type="text"
              id="experienta_antrenamente"
              name="experienta_antrenamente"
              value={formData.experienta_antrenamente}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="health-issues"
              className="block text-sm font-semibold text-gray-700"
            >
              Există vreo afecțiune sau problemă de sănătate pe care ar trebui
              să o aduci la cunoștința noastră?
            </label>
            <textarea
              id="probleme_sanatate"
              name="probleme_sanatate"
              value={formData.probleme_sanatate}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="obiective"
              className="block text-sm font-semibold text-gray-700"
            >
              Care sunt obiectivele tale prin participarea la antrenamente în
              sala de fitness?
            </label>
            <select
              id="obiective"
              name="obiective"
              value={formData.obiective}
              onChange={handleChange}
              selected
              required
              className="mt-1 w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option value="weight-loss">Pierdere în greutate</option>
              <option value="muscle-gain">Creștere musculară</option>
              <option value="toning">Tonifiere și definire musculară</option>
              <option value="cardio-health">
                Îmbunătățirea sănătății cardiovasculare
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="timp_rezultate"
              className="block text-sm font-semibold text-gray-700"
            >
              În cât timp îți dorești să observi rezultatele dorite?
            </label>
            <select
              id="timp_rezultate"
              name="timp_rezultate"
              value={formData.timp_rezultate}
              onChange={handleChange}
              selected
              required
              className="mt-1 w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option value="1-month">1 lună</option>
              <option value="3-months">3 luni</option>
              <option value="6-months">6 luni</option>
              <option value="1-year">1 an</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="abilitati"
              className="block text-sm font-semibold text-gray-700"
            >
              Care sunt abilitățile pe care îți propui să le îmbunătățești sau
              să le dobândești?
            </label>
            <select
              id="abilitati"
              name="abilitati"
              value={formData.abilitati}
              onChange={handleChange}
              selected
              required
              className="mt-1 w-full rounded-md border px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            >
              <option value="strength">Forță</option>
              <option value="flexibility">Flexibilitate</option>
              <option value="endurance">Rezistență</option>
              <option value="balance">Echilibru</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 w-full  rounded-md bg-green-500 py-2 font-semibold tracking-wide text-white shadow-md hover:bg-green-600"
          >
            Trimite
          </button>
        </form>
      </div>
      <div>
        <Lottie
          animationData={woman}
          className=" hidden sm:block sm:h-[200px] sm:w-[180px]"
        ></Lottie>
      </div>
    </div>
  );
}

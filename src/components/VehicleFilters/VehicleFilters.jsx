import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import css from "./VehicleFilters.module.css";
import { Formik, Form, Field } from "formik";
import { changeFilter } from "../../redux/filters/filtersSlice";
import { fetchTrucks } from "../../redux/transportation/operations";

export const VehicleFilters = () => {
  const dispatch = useDispatch();
  const initialValues = {
    equipment: [],
    type: "",
    location: "",
  };

  const currentFilter = useSelector((state) => state.filters.data);

  const handleFilterChange = (values) => {
    const newFilter = { ...currentFilter, ...values };
    dispatch(changeFilter(newFilter));
    dispatch(fetchTrucks({ page: 1, perPage: 4, filter: newFilter }));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFilterChange}>
      {({ values, setFieldValue }) => (
        <Form>
          <div className={css.container}>
            <div>
              <p className={css.locationTitle}>Location</p>
              <div className={css.inputWrapper}>
                <Field
                  type="text"
                  name="location"
                  placeholder="City"
                  className={css.input}
                />
                <Icon
                  id="icon-map"
                  width={20}
                  height={20}
                  className={css.inputIcon}
                />
              </div>
            </div>
            <h2 className={css.title}> Vehicle equipment</h2>
            <div className={css.iconsList}>
              <div
                className={`${css.iconsItem} ${
                  values.equipment.includes("AC") ? css.selected : ""
                }`}
                onClick={() => {
                  const newEquipment = values.equipment.includes("AC")
                    ? values.equipment.filter((item) => item !== "AC")
                    : [...values.equipment, "AC"];
                  setFieldValue("equipment", newEquipment);
                }}
              >
                <Icon id="icon-wind" width={32} height={32} />
                <p className={css.iconTitle}>AC</p>
              </div>

              <div
                className={`${css.iconsItem} ${
                  values.equipment.includes("Automatic") ? css.selected : ""
                }`}
                onClick={() => {
                  const newEquipment = values.equipment.includes("Automatic")
                    ? values.equipment.filter((item) => item !== "Automatic")
                    : [...values.equipment, "Automatic"];
                  setFieldValue("equipment", newEquipment);
                }}
              >
                <Icon id="icon-diagram" width={32} height={32} />
                <p className={css.iconTitle}>Automatic</p>
              </div>

              <div
                className={`${css.iconsItem} ${
                  values.equipment.includes("kitchen") ? css.selected : ""
                }`}
                onClick={() => {
                  const newEquipment = values.equipment.includes("kitchen")
                    ? values.equipment.filter((item) => item !== "kitchen")
                    : [...values.equipment, "kitchen"];
                  setFieldValue("equipment", newEquipment);
                }}
              >
                <Icon id="icon-cup-hot" width={32} height={32} />
                <p className={css.iconTitle}>Kitchen</p>
              </div>

              <div
                className={`${css.iconsItem} ${
                  values.equipment.includes("TV") ? css.selected : ""
                }`}
                onClick={() => {
                  const newEquipment = values.equipment.includes("TV")
                    ? values.equipment.filter((item) => item !== "TV")
                    : [...values.equipment, "TV"];
                  setFieldValue("equipment", newEquipment);
                }}
              >
                <Icon id="icon-tv" width={32} height={32} />
                <p className={css.iconTitle}>TV</p>
              </div>

              <div
                className={`${css.iconsItem} ${
                  values.equipment.includes("water") ? css.selected : ""
                }`}
                onClick={() => {
                  const newEquipment = values.equipment.includes("water")
                    ? values.equipment.filter((item) => item !== "water")
                    : [...values.equipment, "water"];
                  setFieldValue("equipment", newEquipment);
                }}
              >
                <Icon id="icon-shower" width={32} height={32} />
                <p className={css.iconTitle}>Bathroom</p>
              </div>
            </div>
            <div className={css.secondContainer}>
              <h2 className={css.title}>Vehicle type</h2>
              <div className={css.iconsList}>
                <div
                  className={`${css.iconsItem} ${
                    values.type === "van" ? css.selected : ""
                  }`}
                  onClick={() => setFieldValue("type", "van")}
                >
                  <Icon id="icon-bi_grid-1x2" width={32} height={32} />
                  <p className={css.iconTitle}>Van</p>
                </div>
                <div
                  className={`${css.iconsItemIntegrated} ${
                    values.type === "fullyIntegrated" ? css.selected : ""
                  }`}
                  onClick={() => setFieldValue("type", "fullyIntegrated")}
                >
                  <Icon id="icon-bi_grid" width={32} height={32} />
                  <p className={css.iconTitle}>Fully Integrated</p>
                </div>
                <div
                  className={`${css.iconsItem} ${
                    values.type === "alcove" ? css.selected : ""
                  }`}
                  onClick={() => setFieldValue("type", "alcove")}
                >
                  <Icon id="icon-bi_grid-3x3-gap" width={32} height={32} />
                  <p className={css.iconTitle}>Alcove</p>
                </div>
              </div>
            </div>
            <button type="submit">Search</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

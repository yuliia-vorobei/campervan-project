import { useDispatch } from "react-redux";
import Icon from "../Icon/Icon";
import css from "./VehicleFilters.module.css";
import { Formik, Form, Field } from "formik";
import { changeFilter } from "../../redux/filters/filtersSlice";

export const VehicleFilters = () => {
  const dispatch = useDispatch();
  const initialValues = {
    location: "",
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
    transmission: "",
    engine: "",
    form: "",
  };

  const handleSubmit = (values) => {
    dispatch(changeFilter(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form>
          <div className={css.container}>
            <div>
              <p className={css.locationTitle}>Location</p>
              <div className={values.location ? css.inputWrapper : undefined}>
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
              <label className={values.AC ? css.active : undefined}>
                <Field type="checkbox" name="AC" />
                <Icon id="icon-wind" width={32} height={32} />
                AC
              </label>

              <label className={values.kitchen ? css.active : undefined}>
                <Field type="checkbox" name="kitchen" />
                <Icon id="icon-cup-hot" width={32} height={32} />
                Kitchen
              </label>
              <label className={values.TV ? css.active : undefined}>
                <Field type="checkbox" name="TV" />
                <Icon id="icon-tv" width={32} height={32} />
                TV
              </label>
              <label className={values.bathroom ? css.active : undefined}>
                <Field type="checkbox" name="bathroom" />
                <Icon id="icon-shower" width={32} height={32} />
                Bathroom
              </label>

              <label className={values.refrigerator ? css.active : undefined}>
                <Field type="checkbox" name="refrigerator" />
                <Icon id="icon-fridge" width={32} height={32} />
                Refrigerator
              </label>
              <label className={values.microwave ? css.active : undefined}>
                <Field type="checkbox" name="microwave" />
                <Icon
                  id="icon-microwave"
                  width={32}
                  height={32}
                  fill="none"
                  stroke="black"
                />
                Microwave
              </label>

              <label className={values.water ? css.active : undefined}>
                <Field type="checkbox" name="water" />
                <Icon
                  id="icon-water"
                  width={32}
                  height={32}
                  fill="none"
                  stroke="black"
                />
                Water
              </label>
            </div>
          </div>
          <div className={css.container}>
            <h2 className={css.title}>Vehicle type</h2>
            <div className={css.iconsList}>
              <label
                className={
                  values.form === "panelTruck" ? css.active : undefined
                }
              >
                <Field
                  type="radio"
                  name="form"
                  value="panelTruck"
                  onClick={() => {
                    if (values.form === "panelTruck") {
                      setFieldValue("form", "");
                    } else {
                      setFieldValue("form", "panelTruck");
                    }
                  }}
                />
                <Icon id="icon-bi_grid-1x2" width={32} height={32} />
                Van
              </label>
              <label
                className={
                  values.form === "fullyIntegrated" ? css.active : undefined
                }
              >
                <Field
                  type="radio"
                  name="form"
                  value="fullyIntegrated"
                  onClick={() => {
                    if (values.form === "fullyIntegrated") {
                      setFieldValue("form", "");
                    } else {
                      setFieldValue("form", "fullyIntegrated");
                    }
                  }}
                />
                <Icon id="icon-bi_grid" width={32} height={32} />
                Fully Integrated
              </label>
              <label
                className={values.form === "alcove" ? css.active : undefined}
              >
                <Field
                  type="radio"
                  name="form"
                  value="alcove"
                  onClick={() => {
                    if (values.form === "alcove") {
                      setFieldValue("form", "");
                    } else {
                      setFieldValue("form", "alcove");
                    }
                  }}
                />
                <Icon id="icon_alcove" width={32} height={32} />
                Alcove
              </label>
            </div>
          </div>
          <button type="submit">Search</button>
        </Form>
      )}
    </Formik>
  );
};

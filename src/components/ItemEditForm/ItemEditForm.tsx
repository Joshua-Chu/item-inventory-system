import "react-app-polyfill/ie11";
import { Formik, Field, Form, FormikHelpers } from "formik";
import DatePicker from "react-datepicker";
import { useState } from "react";

import * as Yup from "yup";
import toast from "react-hot-toast";
import { FormValues } from "../../types/formvalues";
import { useAppContext } from "../../store/AppProvider";
import { Item } from "../../types/item";

const imageURLregex =
    /(http(s?):)([/|.|\w|\s|-])*\.(jpg|jpeg|png|webp|avif|gif|svg)/g;

const itemSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string(),
    imageURL: Yup.string().matches(
        imageURLregex,
        "This is not a Valid Image URL"
    ),
    date: Yup.date().required("Date is required"),
});

type ItemEditFormProps = {
    item: Item;
    onCancelEdit: (val: boolean) => void;
};

export function ItemEditForm({ item, onCancelEdit }: ItemEditFormProps) {
    const { editItem } = useAppContext();
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className=" flex flex-col basis-full items-center">
            <h1 className="mb-6 text-3xl font-bold">Edit Item</h1>
            <Formik
                initialValues={{
                    name: item.name,
                    description: item.description,
                    imageURL: item.imageURL,
                    date: new Date(item.date),
                }}
                validationSchema={itemSchema}
                onSubmit={(
                    values: FormValues,
                    { setSubmitting, resetForm }: FormikHelpers<FormValues>
                ) => {
                    editItem({ ...values, id: item.id });
                    setSubmitting(false);
                    resetForm();
                    toast.success("Successfully edited 1 item!", {
                        position: "top-right",
                    });
                    onCancelEdit(false);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="flex flex-col gap-4  w-[90%] md:w-full md:max-w-[500px] ">
                        <label htmlFor="name">
                            Name:
                            <Field
                                id="name"
                                name="name"
                                placeholder="item name..."
                            />
                        </label>
                        {errors.name && touched.name ? (
                            <p className="field-error">{errors.name}</p>
                        ) : null}

                        <label htmlFor="description">
                            Description:
                            <Field
                                id="description"
                                name="description"
                                placeholder="description"
                                as="textarea"
                                rows={10}
                            />
                        </label>
                        {errors.description && touched.description ? (
                            <p className="field-error">{errors.description}</p>
                        ) : null}

                        <label htmlFor="imageURL">
                            Image (URL):
                            <Field
                                id="imageURL"
                                name="imageURL"
                                placeholder="john@acme.com"
                            />
                        </label>
                        {errors.imageURL && touched.imageURL ? (
                            <p className="field-error">{errors.imageURL}</p>
                        ) : null}

                        <DatePicker
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                        />
                        {errors.date && touched.date ? (
                            <p className="field-error">{errors.date}</p>
                        ) : null}

                        <div className="flex justify-center gap-8">
                            <button
                                type="button"
                                className="bg-red-400 text-white py-2 px-4 rounded-xl"
                                onClick={() => onCancelEdit(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-green-400 text-white py-2 px-4 rounded-xl"
                            >
                                Update
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

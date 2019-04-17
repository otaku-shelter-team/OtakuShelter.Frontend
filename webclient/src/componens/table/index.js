import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import "flexboxgrid2/flexboxgrid2.css";
import "./Table.scss";

const renderRow = ({item, itemSchema, itemKey, className, onClick}) => {
    const itemClasses = classNames({
        "bg-table__item": true,
        [className]: className
    });
    return (
        <div key={item[itemKey]} className={itemClasses}>
            <div className="columns">
                {itemSchema.map(field => (
                    <div key={field.name} className={`column ${field.className}` || "col-xs-1"} onClick={() => onClick(item)}>
                        {!_isEmpty(field.attributes) &&
                        field.attributes.map(attr => (
                            <div key={attr} className="bg-table__attribute">
                                {_get(item, attr, "")}
                            </div>
                        ))}
                        {field.template && field.template(item)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Table({
                                  schema,
                                  items,
                                  placeholder,
                                  children,
                                  className,
                                  itemKey,
                                  onClick
                              }) {
    const tableClasses = classNames({
        "bg-table": true,
        [className]: className
    });
    return (
        <div className={tableClasses}>
            <div className="bg-table__header">
                <div className="columns">
                    {schema.map(field => (
                        <div key={field.name} className={`column ${field.className}` || "col-xs-1"}>
                            {
                                field.headerTemplate
                                    ? field.headerTemplate(field)
                                    : <span className="bg-table__header-title">{field.name}</span>
                            }
                        </div>
                    ))}
                </div>
            </div>
            {_isEmpty(items) && (
                <div className="bg-table__placeholder">{placeholder}</div>
            )}
            <div className="bg-table__items">
                {items.map(
                    item =>
                        children
                            ? children(item, schema, renderRow)
                            : renderRow({item, itemSchema: schema, itemKey, onClick})
                )}
            </div>
        </div>
    );
}

Table.propTypes = {
    schema: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                name: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
                    .isRequired,
                attributes: PropTypes.array.isRequired,
                className: PropTypes.string,
                headerTemplate: PropTypes.func
            }),
            PropTypes.shape({
                name: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
                    .isRequired,
                template: PropTypes.func.isRequired,
                className: PropTypes.string,
                headerTemplate: PropTypes.func
            })
        ])
    ).isRequired,
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    placeholder: PropTypes.string,
    children: PropTypes.func,
    className: PropTypes.string,
    itemKey: PropTypes.string
};

Table.defaultProps = {
    placeholder: "No records",
    className: "",
    children: null,
    itemKey: "id"
};

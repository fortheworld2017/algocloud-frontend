import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import actions from 'src/modules/superadmin/user/userActions';
import selectors from 'src/modules/superadmin/user/userSelectors';
import userEnumerators from 'src/modules/superadmin/user/userEnumerators';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';

const schema = yup.object().shape({
  fullName: yupFilterSchemas.string(
    i18n('user.fields.fullName'),
  ),
  email: yupFilterSchemas.email(
    i18n('user.fields.email')
  ),
  active: yupFilterSchemas.enumerator(
    i18n('user.fields.status'),
  ),
});

const emptyValues = {
  fullName: null,
  email: null,
  active: null,
};

const previewRenders = {
  fullName: {
    label: i18n('user.fields.fullName'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('user.fields.email'),
    render: filterRenders.generic(),
  },
  active: {
    label: i18n('user.fields.status'),
    render: filterRenders.enumerator('user.active'),
  },
};

function UserFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(
      actions.doFetch(
        schema.cast(initialValues),
        rawFilter,
      ),
    );
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const { loading } = props;

  return (
    <FilterWrapper>
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className="container">
        <div
          className={`collapse ${expanded ? 'show' : ''}`}
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name={'email'}
                    label={i18n('user.fields.email')}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name={'fullName'}
                    label={i18n('user.fields.fullName')}
                  />
                </div>
                <div className="col-12">
                  <SelectFormItem
                    name={'active'}
                    label={i18n('user.fields.status')}
                    options={userEnumerators.status.map(
                      (value) => ({
                        value,
                        label: i18n(`user.active.${value}`),
                      }),
                    )}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 filter-buttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading}
                  >
                    <ButtonIcon
                      loading={loading}
                      iconClass="fas fa-search"
                    />{' '}
                    {i18n('common.search')}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onReset}
                    disabled={loading}
                  >
                    <ButtonIcon
                      loading={loading}
                      iconClass="fas fa-undo"
                    />{' '}
                    {i18n('common.reset')}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default UserFilter;

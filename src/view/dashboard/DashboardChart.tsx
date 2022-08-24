import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AlgorandService from 'src/modules/algorand/algorandService';
import overviewSelectors from 'src/modules/algorand/overview/overviewSelectors';
import DashboardAssetChart from 'src/view/algorand/components/DashboardChart';
import Spinner from 'src/view/shared/Spinner';

export default function DashboardChart(props) {
  const asset = props.asset;
  const [assetData, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(0);

  const lastUpdated = useSelector(
    overviewSelectors.selectLastUpdatedTime
  );

  useEffect(() => {
    if (!asset) return;
    getAssetData();
    setMounted(new Date().getTime() / 1000);
  }, [asset]);

  useEffect(() => {
    if (mounted) {
      let diff = new Date().getTime() / 1000 - mounted
      if (diff > 10)
        getAssetData();
    }
  }, [mounted, lastUpdated])

  const getAssetData = async () => {
    setLoading(true);
    const data = await AlgorandService.getAlgorandAsset(
      asset.assetId,
      'id',
      10,
      0,
    );

    if (data.count) {
      setData(data);
    } else {
      if (data.error) {
        setError(true);
      }
    }

    setLoading(false);
  }

  return (
    <>
      <h4>{asset.unitName}</h4>
      <div className='dashboard-chard-card'>
        
        {
          loading && (
            <Spinner />
          )
        }
        {
          (!loading && assetData) &&
          <DashboardAssetChart
            color='#687dfd'
            data={assetData}
            title={asset.unitName}
          />
        }
        {
          (!loading && error) && (
            <h6 style={{ marginTop: 10 }}>There is no data to display</h6>
          )
        }
      </div>
    </>
  );
}

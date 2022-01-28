import React, { Component } from 'react';
import SearchService from './SearchService';
import ImageFinderAPI from '../ImageFinderAPI';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import status from '../Constants/status';
import NotFaundMassage from './EroorUi/NotFaundMasage';
import imageNotFaund from '../images/400error.jpg';

const { IDLE, RESOLVED, RESJECTED, PENDING } = status;

class App extends Component {
  static defaultProps = {
    state: {
      query: '',
      page: 1,
      totalPages: 0,
      images: [],
      status: IDLE,
    },
  };
  state = this.props.state;

  async componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const { query } = this.state;
    if (query !== prevQuery) {
      this.getImagesData();
    }
    if (this.state.page > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  getImagesData = async () => {
    try {
      this.setState({ status: PENDING });
      const { query, page } = this.state;
      const response = await ImageFinderAPI(query, page);
      const { totalPages, images } = response;
      if (totalPages < 1) {
        this.setState({ status: RESJECTED });
        return;
      }

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
          totalPages,
          status: RESOLVED,
        };
      });
    } catch {
      this.setState({ status: RESJECTED });
    }
  };
  handleFormSubmit = query => {
    if (query !== this.state.query) {
      this.setState(() => {
        return { query, page: 1, images: [] };
      });
    }
  };
  handleLoadMore = () => {
    this.getImagesData();
  };

  render() {
    const { images, status, totalPages, page } = this.state;

    return (
      <SearchService onSubmit={this.handleFormSubmit}>
        <ImageGallery images={images} />

        {status === PENDING && <Loader />}
        {status === RESOLVED && page <= totalPages && (
          <Button onClick={this.handleLoadMore} />
        )}
        {status === RESJECTED && <NotFaundMassage image={imageNotFaund} />}
      </SearchService>
    );
  }
}

export default App;

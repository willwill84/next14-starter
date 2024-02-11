import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/20145987/pexels-photo-20145987/free-photo-of-a-person-riding-a-motorcycle-on-a-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/20145987/pexels-photo-20145987/free-photo-of-a-person-riding-a-motorcycle-on-a-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Author</div>
            <div className={styles.detailValue}>Terry Jefferson</div>
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>01.01.2024</div>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac orci
          phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.
          Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Vitae
          congue eu consequat ac felis donec et. Vulputate enim nulla aliquet
          porttitor lacus. Volutpat sed cras ornare arcu dui. Ac turpis egestas
          sed tempus urna et pharetra pharetra. Morbi quis commodo odio aenean
          sed adipiscing. Posuere ac ut consequat semper viverra. Adipiscing at
          in tellus integer feugiat scelerisque varius. Varius morbi enim nunc
          faucibus a pellentesque sit amet. Natoque penatibus et magnis dis
          parturient montes nascetur ridiculus mus. A erat nam at lectus urna
          duis convallis. Lacus viverra vitae congue eu consequat ac felis.
          Venenatis cras sed felis eget velit aliquet. Enim neque volutpat ac
          tincidunt vitae semper quis. Pellentesque nec nam aliquam sem et. Sit
          amet nulla facilisi morbi tempus iaculis. Pretium vulputate sapien nec
          sagittis aliquam malesuada bibendum. Sed odio morbi quis commodo odio
          aenean. Vestibulum rhoncus est pellentesque elit ullamcorper
          dignissim. Dolor purus non enim praesent. Hendrerit gravida rutrum
          quisque non tellus orci ac. Aenean pharetra magna ac placerat
          vestibulum lectus mauris ultrices. Massa tincidunt dui ut ornare. Ut
          etiam sit amet nisl. Semper quis lectus nulla at volutpat diam ut
          venenatis. Vel fringilla est ullamcorper eget nulla. Nec feugiat nisl
          pretium fusce id velit. Cursus euismod quis viverra nibh cras. Tellus
          id interdum velit laoreet id donec ultrices tincidunt. Cursus euismod
          quis viverra nibh cras pulvinar mattis nunc. Tellus orci ac auctor
          augue mauris augue neque. Ac tincidunt vitae semper quis. Massa vitae
          tortor condimentum lacinia quis vel. Pellentesque habitant morbi
          tristique senectus et. Urna cursus eget nunc scelerisque viverra
          mauris in aliquam sem. Quam viverra orci sagittis eu volutpat odio
          facilisis. Viverra maecenas accumsan lacus vel facilisis volutpat est
          velit. Mi in nulla posuere sollicitudin aliquam ultrices. Curabitur
          vitae nunc sed velit dignissim. Sit amet aliquam id diam maecenas
          ultricies mi. Aenean vel elit scelerisque mauris pellentesque
          pulvinar. Orci dapibus ultrices in iaculis nunc sed augue. Non tellus
          orci ac auctor augue mauris. Risus at ultrices mi tempus imperdiet
          nulla malesuada pellentesque. Et tortor at risus viverra adipiscing at
          in tellus. Sit amet justo donec enim diam vulputate. Nunc congue nisi
          vitae suscipit tellus mauris. Mattis nunc sed blandit libero volutpat
          sed cras ornare arcu. Scelerisque fermentum dui faucibus in ornare
          quam. Mauris pharetra et ultrices neque. Dolor sit amet consectetur
          adipiscing elit ut aliquam. Fringilla phasellus faucibus scelerisque
          eleifend donec. Eget nullam non nisi est. In mollis nunc sed id semper
          risus in hendrerit gravida. Mauris pellentesque pulvinar pellentesque
          habitant. Sit amet luctus venenatis lectus magna fringilla urna.
          Convallis aenean et tortor at risus viverra adipiscing. Id donec
          ultrices tincidunt arcu non sodales neque sodales ut. Turpis massa sed
          elementum tempus. Erat nam at lectus urna. Faucibus turpis in eu mi
          bibendum neque. Enim sed faucibus turpis in eu mi bibendum. Non
          sodales neque sodales ut etiam sit amet. Cras adipiscing enim eu
          turpis egestas pretium aenean pharetra. Libero nunc consequat interdum
          varius sit amet mattis. Diam maecenas sed enim ut sem viverra aliquet
          eget sit. Elit eget gravida cum sociis natoque penatibus et magnis.
          Nunc aliquet bibendum enim facilisis. Elementum curabitur vitae nunc
          sed velit dignissim sodales ut eu. Est ullamcorper eget nulla
          facilisi.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

package TopEducation.m1.repository;

import TopEducation.m1.entity.EstudiantesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstudiantesRepository extends JpaRepository<EstudiantesEntity, Long> {
    public EstudiantesEntity findByRut(String Rut);
}
